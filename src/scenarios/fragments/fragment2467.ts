import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2465 } from "./fragment2465";
import type { FragmentToken2466 } from "./fragment2466";

export const FRAGMENT_2467 = gql(`
  fragment Fragment2467 on Member226 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_226
    memberCount_226
    memberMetric_226
  }
`);

type FragmentResult2467 = ResultOf<typeof FRAGMENT_2467>;
type FragmentSelf2467 = NonNullable<FragmentResult2467>;

export type FragmentToken2467 =
  | FragmentSelf2467["__typename"]
  | FragmentSelf2467["typenameHint"] | FragmentToken2465 | FragmentToken2466;
