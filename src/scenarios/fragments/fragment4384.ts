import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4382 } from "./fragment4382";
import type { FragmentToken4383 } from "./fragment4383";

export const FRAGMENT_4384 = gql(`
  fragment Fragment4384 on Member183 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_183
    memberCount_183
    memberMetric_183
  }
`);

type FragmentResult4384 = ResultOf<typeof FRAGMENT_4384>;
type FragmentSelf4384 = NonNullable<FragmentResult4384>;

export type FragmentToken4384 =
  | FragmentSelf4384["__typename"]
  | FragmentSelf4384["typenameHint"] | FragmentToken4382 | FragmentToken4383;
