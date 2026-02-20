import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4393 } from "./fragment4393";
import type { FragmentToken4394 } from "./fragment4394";

export const FRAGMENT_4395 = gql(`
  fragment Fragment4395 on Member194 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_194
    memberCount_194
    memberMetric_194
  }
`);

type FragmentResult4395 = ResultOf<typeof FRAGMENT_4395>;
type FragmentSelf4395 = NonNullable<FragmentResult4395>;

export type FragmentToken4395 =
  | FragmentSelf4395["__typename"]
  | FragmentSelf4395["typenameHint"] | FragmentToken4393 | FragmentToken4394;
