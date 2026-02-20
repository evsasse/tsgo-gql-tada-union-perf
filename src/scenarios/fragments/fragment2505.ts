import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2503 } from "./fragment2503";
import type { FragmentToken2504 } from "./fragment2504";

export const FRAGMENT_2505 = gql(`
  fragment Fragment2505 on Member264 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_264
    memberCount_264
    memberMetric_264
  }
`);

type FragmentResult2505 = ResultOf<typeof FRAGMENT_2505>;
type FragmentSelf2505 = NonNullable<FragmentResult2505>;

export type FragmentToken2505 =
  | FragmentSelf2505["__typename"]
  | FragmentSelf2505["typenameHint"] | FragmentToken2503 | FragmentToken2504;
