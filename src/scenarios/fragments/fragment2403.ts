import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2401 } from "./fragment2401";
import type { FragmentToken2402 } from "./fragment2402";

export const FRAGMENT_2403 = gql(`
  fragment Fragment2403 on Member162 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_162
    memberCount_162
    memberMetric_162
  }
`);

type FragmentResult2403 = ResultOf<typeof FRAGMENT_2403>;
type FragmentSelf2403 = NonNullable<FragmentResult2403>;

export type FragmentToken2403 =
  | FragmentSelf2403["__typename"]
  | FragmentSelf2403["typenameHint"] | FragmentToken2401 | FragmentToken2402;
