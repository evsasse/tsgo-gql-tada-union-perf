import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2697 } from "./fragment2697";
import type { FragmentToken2698 } from "./fragment2698";

export const FRAGMENT_2699 = gql(`
  fragment Fragment2699 on Member178 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_178
    memberCount_178
    memberMetric_178
  }
`);

type FragmentResult2699 = ResultOf<typeof FRAGMENT_2699>;
type FragmentSelf2699 = NonNullable<FragmentResult2699>;

export type FragmentToken2699 =
  | FragmentSelf2699["__typename"]
  | FragmentSelf2699["typenameHint"] | FragmentToken2697 | FragmentToken2698;
