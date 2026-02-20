import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken099 } from "./fragment099";
import type { FragmentToken100 } from "./fragment100";

export const FRAGMENT_101 = gql(`
  fragment Fragment101 on Member100 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_100
    memberCount_100
    memberMetric_100
  }
`);

type FragmentResult101 = ResultOf<typeof FRAGMENT_101>;
type FragmentSelf101 = NonNullable<FragmentResult101>;

export type FragmentToken101 =
  | FragmentSelf101["__typename"]
  | FragmentSelf101["typenameHint"] | FragmentToken099 | FragmentToken100;
