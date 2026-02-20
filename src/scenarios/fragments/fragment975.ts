import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken973 } from "./fragment973";
import type { FragmentToken974 } from "./fragment974";

export const FRAGMENT_975 = gql(`
  fragment Fragment975 on Member134 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_134
    memberCount_134
    memberMetric_134
  }
`);

type FragmentResult975 = ResultOf<typeof FRAGMENT_975>;
type FragmentSelf975 = NonNullable<FragmentResult975>;

export type FragmentToken975 =
  | FragmentSelf975["__typename"]
  | FragmentSelf975["typenameHint"] | FragmentToken973 | FragmentToken974;
