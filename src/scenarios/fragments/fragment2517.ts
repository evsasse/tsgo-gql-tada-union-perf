import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2515 } from "./fragment2515";
import type { FragmentToken2516 } from "./fragment2516";

export const FRAGMENT_2517 = gql(`
  fragment Fragment2517 on Member276 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_276
    memberCount_276
    memberMetric_276
  }
`);

type FragmentResult2517 = ResultOf<typeof FRAGMENT_2517>;
type FragmentSelf2517 = NonNullable<FragmentResult2517>;

export type FragmentToken2517 =
  | FragmentSelf2517["__typename"]
  | FragmentSelf2517["typenameHint"] | FragmentToken2515 | FragmentToken2516;
