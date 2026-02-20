import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken626 } from "./fragment626";
import type { FragmentToken627 } from "./fragment627";

export const FRAGMENT_628 = gql(`
  fragment Fragment628 on Member67 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_67
    memberCount_67
    memberMetric_67
  }
`);

type FragmentResult628 = ResultOf<typeof FRAGMENT_628>;
type FragmentSelf628 = NonNullable<FragmentResult628>;

export type FragmentToken628 =
  | FragmentSelf628["__typename"]
  | FragmentSelf628["typenameHint"] | FragmentToken626 | FragmentToken627;
