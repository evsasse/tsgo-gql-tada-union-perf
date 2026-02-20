import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2409 } from "./fragment2409";
import type { FragmentToken2410 } from "./fragment2410";

export const FRAGMENT_2411 = gql(`
  fragment Fragment2411 on Member170 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_170
    memberCount_170
    memberMetric_170
  }
`);

type FragmentResult2411 = ResultOf<typeof FRAGMENT_2411>;
type FragmentSelf2411 = NonNullable<FragmentResult2411>;

export type FragmentToken2411 =
  | FragmentSelf2411["__typename"]
  | FragmentSelf2411["typenameHint"] | FragmentToken2409 | FragmentToken2410;
