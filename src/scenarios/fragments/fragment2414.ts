import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2412 } from "./fragment2412";
import type { FragmentToken2413 } from "./fragment2413";

export const FRAGMENT_2414 = gql(`
  fragment Fragment2414 on Member173 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_173
    memberCount_173
    memberMetric_173
  }
`);

type FragmentResult2414 = ResultOf<typeof FRAGMENT_2414>;
type FragmentSelf2414 = NonNullable<FragmentResult2414>;

export type FragmentToken2414 =
  | FragmentSelf2414["__typename"]
  | FragmentSelf2414["typenameHint"] | FragmentToken2412 | FragmentToken2413;
