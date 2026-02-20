import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4995 } from "./fragment4995";
import type { FragmentToken4996 } from "./fragment4996";

export const FRAGMENT_4997 = gql(`
  fragment Fragment4997 on Member236 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_236
    memberCount_236
    memberMetric_236
  }
`);

type FragmentResult4997 = ResultOf<typeof FRAGMENT_4997>;
type FragmentSelf4997 = NonNullable<FragmentResult4997>;

export type FragmentToken4997 =
  | FragmentSelf4997["__typename"]
  | FragmentSelf4997["typenameHint"] | FragmentToken4995 | FragmentToken4996;
