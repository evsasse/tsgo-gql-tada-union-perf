import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken385 } from "./fragment385";
import type { FragmentToken386 } from "./fragment386";

export const FRAGMENT_387 = gql(`
  fragment Fragment387 on Member106 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_106
    memberCount_106
    memberMetric_106
  }
`);

type FragmentResult387 = ResultOf<typeof FRAGMENT_387>;
type FragmentSelf387 = NonNullable<FragmentResult387>;

export type FragmentToken387 =
  | FragmentSelf387["__typename"]
  | FragmentSelf387["typenameHint"] | FragmentToken385 | FragmentToken386;
