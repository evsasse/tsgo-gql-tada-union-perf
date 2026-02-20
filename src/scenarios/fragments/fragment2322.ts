import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2320 } from "./fragment2320";
import type { FragmentToken2321 } from "./fragment2321";

export const FRAGMENT_2322 = gql(`
  fragment Fragment2322 on Member81 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_81
    memberCount_81
    memberMetric_81
  }
`);

type FragmentResult2322 = ResultOf<typeof FRAGMENT_2322>;
type FragmentSelf2322 = NonNullable<FragmentResult2322>;

export type FragmentToken2322 =
  | FragmentSelf2322["__typename"]
  | FragmentSelf2322["typenameHint"] | FragmentToken2320 | FragmentToken2321;
