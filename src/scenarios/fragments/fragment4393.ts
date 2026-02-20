import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4391 } from "./fragment4391";
import type { FragmentToken4392 } from "./fragment4392";

export const FRAGMENT_4393 = gql(`
  fragment Fragment4393 on Member192 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_192
    memberCount_192
    memberMetric_192
  }
`);

type FragmentResult4393 = ResultOf<typeof FRAGMENT_4393>;
type FragmentSelf4393 = NonNullable<FragmentResult4393>;

export type FragmentToken4393 =
  | FragmentSelf4393["__typename"]
  | FragmentSelf4393["typenameHint"] | FragmentToken4391 | FragmentToken4392;
