import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken621 } from "./fragment621";
import type { FragmentToken622 } from "./fragment622";

export const FRAGMENT_623 = gql(`
  fragment Fragment623 on Member62 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_62
    memberCount_62
    memberMetric_62
  }
`);

type FragmentResult623 = ResultOf<typeof FRAGMENT_623>;
type FragmentSelf623 = NonNullable<FragmentResult623>;

export type FragmentToken623 =
  | FragmentSelf623["__typename"]
  | FragmentSelf623["typenameHint"] | FragmentToken621 | FragmentToken622;
