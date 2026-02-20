import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken898 } from "./fragment898";
import type { FragmentToken899 } from "./fragment899";

export const FRAGMENT_900 = gql(`
  fragment Fragment900 on Member59 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_59
    memberCount_59
    memberMetric_59
  }
`);

type FragmentResult900 = ResultOf<typeof FRAGMENT_900>;
type FragmentSelf900 = NonNullable<FragmentResult900>;

export type FragmentToken900 =
  | FragmentSelf900["__typename"]
  | FragmentSelf900["typenameHint"] | FragmentToken898 | FragmentToken899;
