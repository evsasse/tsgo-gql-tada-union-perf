import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4207 } from "./fragment4207";
import type { FragmentToken4208 } from "./fragment4208";

export const FRAGMENT_4209 = gql(`
  fragment Fragment4209 on Member08 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_08
    memberCount_08
    memberMetric_08
  }
`);

type FragmentResult4209 = ResultOf<typeof FRAGMENT_4209>;
type FragmentSelf4209 = NonNullable<FragmentResult4209>;

export type FragmentToken4209 =
  | FragmentSelf4209["__typename"]
  | FragmentSelf4209["typenameHint"] | FragmentToken4207 | FragmentToken4208;
