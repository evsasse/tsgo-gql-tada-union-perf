import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2899 } from "./fragment2899";
import type { FragmentToken2900 } from "./fragment2900";

export const FRAGMENT_2901 = gql(`
  fragment Fragment2901 on Member100 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_100
    memberCount_100
    memberMetric_100
  }
`);

type FragmentResult2901 = ResultOf<typeof FRAGMENT_2901>;
type FragmentSelf2901 = NonNullable<FragmentResult2901>;

export type FragmentToken2901 =
  | FragmentSelf2901["__typename"]
  | FragmentSelf2901["typenameHint"] | FragmentToken2899 | FragmentToken2900;
