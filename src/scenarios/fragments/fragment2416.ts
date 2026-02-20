import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2414 } from "./fragment2414";
import type { FragmentToken2415 } from "./fragment2415";

export const FRAGMENT_2416 = gql(`
  fragment Fragment2416 on Member175 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_175
    memberCount_175
    memberMetric_175
  }
`);

type FragmentResult2416 = ResultOf<typeof FRAGMENT_2416>;
type FragmentSelf2416 = NonNullable<FragmentResult2416>;

export type FragmentToken2416 =
  | FragmentSelf2416["__typename"]
  | FragmentSelf2416["typenameHint"] | FragmentToken2414 | FragmentToken2415;
