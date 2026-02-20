import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken891 } from "./fragment891";
import type { FragmentToken892 } from "./fragment892";

export const FRAGMENT_893 = gql(`
  fragment Fragment893 on Member52 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_52
    memberCount_52
    memberMetric_52
  }
`);

type FragmentResult893 = ResultOf<typeof FRAGMENT_893>;
type FragmentSelf893 = NonNullable<FragmentResult893>;

export type FragmentToken893 =
  | FragmentSelf893["__typename"]
  | FragmentSelf893["typenameHint"] | FragmentToken891 | FragmentToken892;
