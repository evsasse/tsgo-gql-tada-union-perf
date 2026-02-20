import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4459 } from "./fragment4459";
import type { FragmentToken4460 } from "./fragment4460";

export const FRAGMENT_4461 = gql(`
  fragment Fragment4461 on Member260 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_260
    memberCount_260
    memberMetric_260
  }
`);

type FragmentResult4461 = ResultOf<typeof FRAGMENT_4461>;
type FragmentSelf4461 = NonNullable<FragmentResult4461>;

export type FragmentToken4461 =
  | FragmentSelf4461["__typename"]
  | FragmentSelf4461["typenameHint"] | FragmentToken4459 | FragmentToken4460;
