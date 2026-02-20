import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2402 } from "./fragment2402";
import type { FragmentToken2403 } from "./fragment2403";

export const FRAGMENT_2404 = gql(`
  fragment Fragment2404 on Member163 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_163
    memberCount_163
    memberMetric_163
  }
`);

type FragmentResult2404 = ResultOf<typeof FRAGMENT_2404>;
type FragmentSelf2404 = NonNullable<FragmentResult2404>;

export type FragmentToken2404 =
  | FragmentSelf2404["__typename"]
  | FragmentSelf2404["typenameHint"] | FragmentToken2402 | FragmentToken2403;
