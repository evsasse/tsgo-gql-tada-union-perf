import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken940 } from "./fragment940";
import type { FragmentToken941 } from "./fragment941";

export const FRAGMENT_942 = gql(`
  fragment Fragment942 on Member101 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_101
    memberCount_101
    memberMetric_101
  }
`);

type FragmentResult942 = ResultOf<typeof FRAGMENT_942>;
type FragmentSelf942 = NonNullable<FragmentResult942>;

export type FragmentToken942 =
  | FragmentSelf942["__typename"]
  | FragmentSelf942["typenameHint"] | FragmentToken940 | FragmentToken941;
