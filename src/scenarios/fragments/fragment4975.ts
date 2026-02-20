import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4973 } from "./fragment4973";
import type { FragmentToken4974 } from "./fragment4974";

export const FRAGMENT_4975 = gql(`
  fragment Fragment4975 on Member214 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_214
    memberCount_214
    memberMetric_214
  }
`);

type FragmentResult4975 = ResultOf<typeof FRAGMENT_4975>;
type FragmentSelf4975 = NonNullable<FragmentResult4975>;

export type FragmentToken4975 =
  | FragmentSelf4975["__typename"]
  | FragmentSelf4975["typenameHint"] | FragmentToken4973 | FragmentToken4974;
