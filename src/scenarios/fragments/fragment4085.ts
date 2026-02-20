import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4083 } from "./fragment4083";
import type { FragmentToken4084 } from "./fragment4084";

export const FRAGMENT_4085 = gql(`
  fragment Fragment4085 on Member164 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_164
    memberCount_164
    memberMetric_164
  }
`);

type FragmentResult4085 = ResultOf<typeof FRAGMENT_4085>;
type FragmentSelf4085 = NonNullable<FragmentResult4085>;

export type FragmentToken4085 =
  | FragmentSelf4085["__typename"]
  | FragmentSelf4085["typenameHint"] | FragmentToken4083 | FragmentToken4084;
