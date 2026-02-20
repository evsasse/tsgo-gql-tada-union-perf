import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2502 } from "./fragment2502";
import type { FragmentToken2503 } from "./fragment2503";

export const FRAGMENT_2504 = gql(`
  fragment Fragment2504 on Member263 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_263
    memberCount_263
    memberMetric_263
  }
`);

type FragmentResult2504 = ResultOf<typeof FRAGMENT_2504>;
type FragmentSelf2504 = NonNullable<FragmentResult2504>;

export type FragmentToken2504 =
  | FragmentSelf2504["__typename"]
  | FragmentSelf2504["typenameHint"] | FragmentToken2502 | FragmentToken2503;
