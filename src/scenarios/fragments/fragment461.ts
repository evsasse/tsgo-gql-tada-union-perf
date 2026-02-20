import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken459 } from "./fragment459";
import type { FragmentToken460 } from "./fragment460";

export const FRAGMENT_461 = gql(`
  fragment Fragment461 on Member180 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_180
    memberCount_180
    memberMetric_180
  }
`);

type FragmentResult461 = ResultOf<typeof FRAGMENT_461>;
type FragmentSelf461 = NonNullable<FragmentResult461>;

export type FragmentToken461 =
  | FragmentSelf461["__typename"]
  | FragmentSelf461["typenameHint"] | FragmentToken459 | FragmentToken460;
