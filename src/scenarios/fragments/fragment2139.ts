import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2137 } from "./fragment2137";
import type { FragmentToken2138 } from "./fragment2138";

export const FRAGMENT_2139 = gql(`
  fragment Fragment2139 on Member178 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_178
    memberCount_178
    memberMetric_178
  }
`);

type FragmentResult2139 = ResultOf<typeof FRAGMENT_2139>;
type FragmentSelf2139 = NonNullable<FragmentResult2139>;

export type FragmentToken2139 =
  | FragmentSelf2139["__typename"]
  | FragmentSelf2139["typenameHint"] | FragmentToken2137 | FragmentToken2138;
