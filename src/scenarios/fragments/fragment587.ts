import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken585 } from "./fragment585";
import type { FragmentToken586 } from "./fragment586";

export const FRAGMENT_587 = gql(`
  fragment Fragment587 on Member26 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_26
    memberCount_26
    memberMetric_26
  }
`);

type FragmentResult587 = ResultOf<typeof FRAGMENT_587>;
type FragmentSelf587 = NonNullable<FragmentResult587>;

export type FragmentToken587 =
  | FragmentSelf587["__typename"]
  | FragmentSelf587["typenameHint"] | FragmentToken585 | FragmentToken586;
