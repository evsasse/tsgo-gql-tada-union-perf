import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken831 } from "./fragment831";
import type { FragmentToken832 } from "./fragment832";

export const FRAGMENT_833 = gql(`
  fragment Fragment833 on Member272 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_272
    memberCount_272
    memberMetric_272
  }
`);

type FragmentResult833 = ResultOf<typeof FRAGMENT_833>;
type FragmentSelf833 = NonNullable<FragmentResult833>;

export type FragmentToken833 =
  | FragmentSelf833["__typename"]
  | FragmentSelf833["typenameHint"] | FragmentToken831 | FragmentToken832;
