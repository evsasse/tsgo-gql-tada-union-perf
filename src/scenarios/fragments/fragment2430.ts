import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2428 } from "./fragment2428";
import type { FragmentToken2429 } from "./fragment2429";

export const FRAGMENT_2430 = gql(`
  fragment Fragment2430 on Member189 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_189
    memberCount_189
    memberMetric_189
  }
`);

type FragmentResult2430 = ResultOf<typeof FRAGMENT_2430>;
type FragmentSelf2430 = NonNullable<FragmentResult2430>;

export type FragmentToken2430 =
  | FragmentSelf2430["__typename"]
  | FragmentSelf2430["typenameHint"] | FragmentToken2428 | FragmentToken2429;
