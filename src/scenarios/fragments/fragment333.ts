import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken331 } from "./fragment331";
import type { FragmentToken332 } from "./fragment332";

export const FRAGMENT_333 = gql(`
  fragment Fragment333 on Member52 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_52
    memberCount_52
    memberMetric_52
  }
`);

type FragmentResult333 = ResultOf<typeof FRAGMENT_333>;
type FragmentSelf333 = NonNullable<FragmentResult333>;

export type FragmentToken333 =
  | FragmentSelf333["__typename"]
  | FragmentSelf333["typenameHint"] | FragmentToken331 | FragmentToken332;
