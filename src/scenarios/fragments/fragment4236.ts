import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4234 } from "./fragment4234";
import type { FragmentToken4235 } from "./fragment4235";

export const FRAGMENT_4236 = gql(`
  fragment Fragment4236 on Member35 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_35
    memberCount_35
    memberMetric_35
  }
`);

type FragmentResult4236 = ResultOf<typeof FRAGMENT_4236>;
type FragmentSelf4236 = NonNullable<FragmentResult4236>;

export type FragmentToken4236 =
  | FragmentSelf4236["__typename"]
  | FragmentSelf4236["typenameHint"] | FragmentToken4234 | FragmentToken4235;
