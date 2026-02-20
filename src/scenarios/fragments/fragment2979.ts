import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2977 } from "./fragment2977";
import type { FragmentToken2978 } from "./fragment2978";

export const FRAGMENT_2979 = gql(`
  fragment Fragment2979 on Member178 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_178
    memberCount_178
    memberMetric_178
  }
`);

type FragmentResult2979 = ResultOf<typeof FRAGMENT_2979>;
type FragmentSelf2979 = NonNullable<FragmentResult2979>;

export type FragmentToken2979 =
  | FragmentSelf2979["__typename"]
  | FragmentSelf2979["typenameHint"] | FragmentToken2977 | FragmentToken2978;
