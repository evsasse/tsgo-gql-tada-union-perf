import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken384 } from "./fragment384";
import type { FragmentToken385 } from "./fragment385";

export const FRAGMENT_386 = gql(`
  fragment Fragment386 on Member105 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_105
    memberCount_105
    memberMetric_105
  }
`);

type FragmentResult386 = ResultOf<typeof FRAGMENT_386>;
type FragmentSelf386 = NonNullable<FragmentResult386>;

export type FragmentToken386 =
  | FragmentSelf386["__typename"]
  | FragmentSelf386["typenameHint"] | FragmentToken384 | FragmentToken385;
