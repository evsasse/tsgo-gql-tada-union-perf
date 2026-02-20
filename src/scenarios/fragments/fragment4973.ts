import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4971 } from "./fragment4971";
import type { FragmentToken4972 } from "./fragment4972";

export const FRAGMENT_4973 = gql(`
  fragment Fragment4973 on Member212 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_212
    memberCount_212
    memberMetric_212
  }
`);

type FragmentResult4973 = ResultOf<typeof FRAGMENT_4973>;
type FragmentSelf4973 = NonNullable<FragmentResult4973>;

export type FragmentToken4973 =
  | FragmentSelf4973["__typename"]
  | FragmentSelf4973["typenameHint"] | FragmentToken4971 | FragmentToken4972;
