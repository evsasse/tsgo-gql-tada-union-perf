import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4341 } from "./fragment4341";
import type { FragmentToken4342 } from "./fragment4342";

export const FRAGMENT_4343 = gql(`
  fragment Fragment4343 on Member142 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_142
    memberCount_142
    memberMetric_142
  }
`);

type FragmentResult4343 = ResultOf<typeof FRAGMENT_4343>;
type FragmentSelf4343 = NonNullable<FragmentResult4343>;

export type FragmentToken4343 =
  | FragmentSelf4343["__typename"]
  | FragmentSelf4343["typenameHint"] | FragmentToken4341 | FragmentToken4342;
