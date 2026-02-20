import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4270 } from "./fragment4270";
import type { FragmentToken4271 } from "./fragment4271";

export const FRAGMENT_4272 = gql(`
  fragment Fragment4272 on Member71 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_71
    memberCount_71
    memberMetric_71
  }
`);

type FragmentResult4272 = ResultOf<typeof FRAGMENT_4272>;
type FragmentSelf4272 = NonNullable<FragmentResult4272>;

export type FragmentToken4272 =
  | FragmentSelf4272["__typename"]
  | FragmentSelf4272["typenameHint"] | FragmentToken4270 | FragmentToken4271;
