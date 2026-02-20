import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken600 } from "./fragment600";
import type { FragmentToken601 } from "./fragment601";

export const FRAGMENT_602 = gql(`
  fragment Fragment602 on Member41 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_41
    memberCount_41
    memberMetric_41
  }
`);

type FragmentResult602 = ResultOf<typeof FRAGMENT_602>;
type FragmentSelf602 = NonNullable<FragmentResult602>;

export type FragmentToken602 =
  | FragmentSelf602["__typename"]
  | FragmentSelf602["typenameHint"] | FragmentToken600 | FragmentToken601;
