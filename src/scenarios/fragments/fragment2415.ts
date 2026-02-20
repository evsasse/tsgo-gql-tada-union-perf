import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2413 } from "./fragment2413";
import type { FragmentToken2414 } from "./fragment2414";

export const FRAGMENT_2415 = gql(`
  fragment Fragment2415 on Member174 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_174
    memberCount_174
    memberMetric_174
  }
`);

type FragmentResult2415 = ResultOf<typeof FRAGMENT_2415>;
type FragmentSelf2415 = NonNullable<FragmentResult2415>;

export type FragmentToken2415 =
  | FragmentSelf2415["__typename"]
  | FragmentSelf2415["typenameHint"] | FragmentToken2413 | FragmentToken2414;
