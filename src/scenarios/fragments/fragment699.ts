import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken697 } from "./fragment697";
import type { FragmentToken698 } from "./fragment698";

export const FRAGMENT_699 = gql(`
  fragment Fragment699 on Member138 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_138
    memberCount_138
    memberMetric_138
  }
`);

type FragmentResult699 = ResultOf<typeof FRAGMENT_699>;
type FragmentSelf699 = NonNullable<FragmentResult699>;

export type FragmentToken699 =
  | FragmentSelf699["__typename"]
  | FragmentSelf699["typenameHint"] | FragmentToken697 | FragmentToken698;
