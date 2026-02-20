import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4583 } from "./fragment4583";
import type { FragmentToken4584 } from "./fragment4584";

export const FRAGMENT_4585 = gql(`
  fragment Fragment4585 on Member104 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_104
    memberCount_104
    memberMetric_104
  }
`);

type FragmentResult4585 = ResultOf<typeof FRAGMENT_4585>;
type FragmentSelf4585 = NonNullable<FragmentResult4585>;

export type FragmentToken4585 =
  | FragmentSelf4585["__typename"]
  | FragmentSelf4585["typenameHint"] | FragmentToken4583 | FragmentToken4584;
