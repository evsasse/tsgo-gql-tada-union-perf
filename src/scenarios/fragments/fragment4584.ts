import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4582 } from "./fragment4582";
import type { FragmentToken4583 } from "./fragment4583";

export const FRAGMENT_4584 = gql(`
  fragment Fragment4584 on Member103 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_103
    memberCount_103
    memberMetric_103
  }
`);

type FragmentResult4584 = ResultOf<typeof FRAGMENT_4584>;
type FragmentSelf4584 = NonNullable<FragmentResult4584>;

export type FragmentToken4584 =
  | FragmentSelf4584["__typename"]
  | FragmentSelf4584["typenameHint"] | FragmentToken4582 | FragmentToken4583;
