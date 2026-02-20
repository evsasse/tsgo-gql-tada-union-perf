import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken887 } from "./fragment887";
import type { FragmentToken888 } from "./fragment888";

export const FRAGMENT_889 = gql(`
  fragment Fragment889 on Member48 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_48
    memberCount_48
    memberMetric_48
  }
`);

type FragmentResult889 = ResultOf<typeof FRAGMENT_889>;
type FragmentSelf889 = NonNullable<FragmentResult889>;

export type FragmentToken889 =
  | FragmentSelf889["__typename"]
  | FragmentSelf889["typenameHint"] | FragmentToken887 | FragmentToken888;
