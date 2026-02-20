import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2370 } from "./fragment2370";
import type { FragmentToken2371 } from "./fragment2371";

export const FRAGMENT_2372 = gql(`
  fragment Fragment2372 on Member131 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_131
    memberCount_131
    memberMetric_131
  }
`);

type FragmentResult2372 = ResultOf<typeof FRAGMENT_2372>;
type FragmentSelf2372 = NonNullable<FragmentResult2372>;

export type FragmentToken2372 =
  | FragmentSelf2372["__typename"]
  | FragmentSelf2372["typenameHint"] | FragmentToken2370 | FragmentToken2371;
