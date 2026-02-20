import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4235 } from "./fragment4235";
import type { FragmentToken4236 } from "./fragment4236";

export const FRAGMENT_4237 = gql(`
  fragment Fragment4237 on Member36 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_36
    memberCount_36
    memberMetric_36
  }
`);

type FragmentResult4237 = ResultOf<typeof FRAGMENT_4237>;
type FragmentSelf4237 = NonNullable<FragmentResult4237>;

export type FragmentToken4237 =
  | FragmentSelf4237["__typename"]
  | FragmentSelf4237["typenameHint"] | FragmentToken4235 | FragmentToken4236;
