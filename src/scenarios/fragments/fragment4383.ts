import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4381 } from "./fragment4381";
import type { FragmentToken4382 } from "./fragment4382";

export const FRAGMENT_4383 = gql(`
  fragment Fragment4383 on Member182 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_182
    memberCount_182
    memberMetric_182
  }
`);

type FragmentResult4383 = ResultOf<typeof FRAGMENT_4383>;
type FragmentSelf4383 = NonNullable<FragmentResult4383>;

export type FragmentToken4383 =
  | FragmentSelf4383["__typename"]
  | FragmentSelf4383["typenameHint"] | FragmentToken4381 | FragmentToken4382;
