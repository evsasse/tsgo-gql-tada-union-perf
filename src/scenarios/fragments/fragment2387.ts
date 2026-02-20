import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2385 } from "./fragment2385";
import type { FragmentToken2386 } from "./fragment2386";

export const FRAGMENT_2387 = gql(`
  fragment Fragment2387 on Member146 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_146
    memberCount_146
    memberMetric_146
  }
`);

type FragmentResult2387 = ResultOf<typeof FRAGMENT_2387>;
type FragmentSelf2387 = NonNullable<FragmentResult2387>;

export type FragmentToken2387 =
  | FragmentSelf2387["__typename"]
  | FragmentSelf2387["typenameHint"] | FragmentToken2385 | FragmentToken2386;
