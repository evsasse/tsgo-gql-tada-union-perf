import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4795 } from "./fragment4795";
import type { FragmentToken4796 } from "./fragment4796";

export const FRAGMENT_4797 = gql(`
  fragment Fragment4797 on Member36 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_36
    memberCount_36
    memberMetric_36
  }
`);

type FragmentResult4797 = ResultOf<typeof FRAGMENT_4797>;
type FragmentSelf4797 = NonNullable<FragmentResult4797>;

export type FragmentToken4797 =
  | FragmentSelf4797["__typename"]
  | FragmentSelf4797["typenameHint"] | FragmentToken4795 | FragmentToken4796;
