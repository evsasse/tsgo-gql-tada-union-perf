import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4779 } from "./fragment4779";
import type { FragmentToken4780 } from "./fragment4780";

export const FRAGMENT_4781 = gql(`
  fragment Fragment4781 on Member20 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_20
    memberCount_20
    memberMetric_20
  }
`);

type FragmentResult4781 = ResultOf<typeof FRAGMENT_4781>;
type FragmentSelf4781 = NonNullable<FragmentResult4781>;

export type FragmentToken4781 =
  | FragmentSelf4781["__typename"]
  | FragmentSelf4781["typenameHint"] | FragmentToken4779 | FragmentToken4780;
