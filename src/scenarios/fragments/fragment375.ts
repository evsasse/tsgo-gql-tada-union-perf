import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken373 } from "./fragment373";
import type { FragmentToken374 } from "./fragment374";

export const FRAGMENT_375 = gql(`
  fragment Fragment375 on Member94 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_94
    memberCount_94
    memberMetric_94
  }
`);

type FragmentResult375 = ResultOf<typeof FRAGMENT_375>;
type FragmentSelf375 = NonNullable<FragmentResult375>;

export type FragmentToken375 =
  | FragmentSelf375["__typename"]
  | FragmentSelf375["typenameHint"] | FragmentToken373 | FragmentToken374;
