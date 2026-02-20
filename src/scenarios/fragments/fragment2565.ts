import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2563 } from "./fragment2563";
import type { FragmentToken2564 } from "./fragment2564";

export const FRAGMENT_2565 = gql(`
  fragment Fragment2565 on Member44 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_44
    memberCount_44
    memberMetric_44
  }
`);

type FragmentResult2565 = ResultOf<typeof FRAGMENT_2565>;
type FragmentSelf2565 = NonNullable<FragmentResult2565>;

export type FragmentToken2565 =
  | FragmentSelf2565["__typename"]
  | FragmentSelf2565["typenameHint"] | FragmentToken2563 | FragmentToken2564;
